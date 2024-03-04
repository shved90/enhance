

export default function LayoutMain({ html, state }) {
    const { attrs } = state
    const { heading = 'Default' } = attrs


    return html`
        <nav-main></nav-main>
        <my-header tabindex="0" heading="${heading}"></my-header>
        <main id="mainContent" tabindex="0">
            <slot></slot>
        </main>
    `
}