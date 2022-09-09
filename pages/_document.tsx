import Document, {
	DocumentContext,
	Html,
	Head,
	Main,
	NextScript
} from "next/document"

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initalProps = await Document.getInitialProps(ctx)

		return initalProps
	}

	render() {
		return (
			<Html lang="es">
				<Head>
					<meta name="author" content="Erick Briones" />
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=inter:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
