

export default function MyHeader({ html, state }) {
	const { attrs } = state
	const { heading = 'Default' } = attrs

	return html`
    <header>
      <h1>
        ${heading}
      </h1>
    </header>
    
  `
}