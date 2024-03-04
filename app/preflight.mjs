export default async function Preflight({ req }) {
	return {
		nav: ["/", "/about", "/some"],
    currentPage: req.path
	}
}