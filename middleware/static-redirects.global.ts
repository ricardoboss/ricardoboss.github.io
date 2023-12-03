interface StaticRedirect {
  to: string
  external?: boolean
}

const permanentRedirects = {
  "": { to: "/projects" },
  "r%c3%a9sum%c3%a9": { to: "/curriculum-vitae" },
  "resume": { to: "/curriculum-vitae" },
  "github": { to: "https://github.com/ricardoboss", external: true },
} as { [k: string]: StaticRedirect | undefined }

export default defineNuxtRouteMiddleware((to) => {
  const targetPath = to.fullPath.toLowerCase().substring(1)
  const redirect = permanentRedirects[targetPath]

  if (typeof redirect !== "undefined") {
    return navigateTo(redirect.to, {
      replace: true,
      redirectCode: 301,
      external: redirect.external,
    })
  }
})
