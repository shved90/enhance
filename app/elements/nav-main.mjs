


export default function Nav({ html, state }) {
    const { nav, currentPage } = state.store

    const link = nav.map(item => {
        return html`
            <li key="${item}" ${currentPage == item && "class=active"}>
                <a href="${item}">${item}</a>
            </li>
        `})
        .join('\n')

    return html`
        <nav id="mainNav">
            <ul>
                ${nav.length ? link : `no links`}
            </ul>
        </nav>
    `
}