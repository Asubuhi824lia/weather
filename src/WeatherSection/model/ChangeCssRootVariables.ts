export default function ChangeCssRootVariables(theme: string) {
  const root = document.querySelector(':root') as HTMLElement
  
  const components = [
    "body-background",
    "components-background",
    "card-background",
    "card-shadow",
    "text-color",
  ]
  
  components.forEach(prefix => {
    root.style.setProperty(
      `--${prefix}-default`, 
      `var(--${prefix}-${theme})`
    )
  })
}