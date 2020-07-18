<template>
	<ul role="menu" class="nav nav-pills justify-content-end">
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/about">About</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/blog" active-class="active">Blog</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/resume">Résumé</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/projects">Projects</nuxt-link>
    </li>
    <li class="nav-item">
      <nuxt-link class="nav-link" to="/contact">Contact</nuxt-link>
    </li>
  </ul>
</template>

<script>
	export default {
		name: "Navbar"
	}
</script>
