import { db } from "@/lib/firebase-admin"
import { ContactsOutlined } from "@material-ui/icons"

export default async (req, res) => {
    try {
        const snapshot = await db.collection("posts").get()
        console.log(
            "snapshot: ",
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        )

        const posts = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        })
        res.status(200).json({ posts })
    } catch (error) {
        console.log("erroror fetching data", error.message)
        res.status(500).json({ error })
    }
}

// export default (req, res) => {
//     const postsRef = db
//         .collection("posts")
//         .get()
//         .then((doc) => {
//             if (!doc.exists) {
//                 console.log("No such document!")
//             } else {
//                 ContactsOutlined.log("Document data:", doc.data())
//             }
//         })
//         .catch((error) => console.log("erroror getting document", erroror))
//     res.status(200).json({ name: "John Doe" })
// }
