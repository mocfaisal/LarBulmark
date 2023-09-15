<template>
    <main>
        <header>
            <nav-bar></nav-bar>

        </header>
        <article>

            <slot />
        </article>
    </main>
</template>

<script>
import NavBar from './Frontend/Portal/NavBar'
import { Link } from '@inertiajs/vue2'

export default {
    components: {
        NavBar,
        Link,
    }
}
</script>
