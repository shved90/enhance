export default function FourOhFour({ html, state }) {
  const { error } = state.attrs

  return html`
    <layout-main class="pageStyle-violet">
    <article>
      <h1>Not Found - 404</h1>
      <h2>Sorry we can't find that.</h2>
      <a href="/">get me back</a>
      <p>${error && error}</p>
      </article>
    </layout-main>
  `
}