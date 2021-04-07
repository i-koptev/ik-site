import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Welcome to my site!</h1>
            </main>
        </div>
    )
}
