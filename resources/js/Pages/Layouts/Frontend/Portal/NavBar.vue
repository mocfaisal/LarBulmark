<template>
    <nav class="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
            <a class="navbar-burger" data-target="navbarBasicExample" role="button" aria-expanded="false"
                aria-label="menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <!-- Navigation Menu Start -->
        <div class="navbar-menu" id="navbarBasicExample">
            <div class="navbar-start is-justify-content-center is-flex-grow-1">
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link"> Categories </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item"> Electronic </a>
                        <a class="navbar-item"> Clothing and Accessories </a>
                        <a class="navbar-item"> Entertainment </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item is-active"> Others </a>
                    </div>
                </div>
                <div class="navbar-item column is-8">
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input" type="text" placeholder="Search Product...">
                            <span class="icon is-small is-right">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <a class="button is-rounded is-light"> Log in </a>
                        <a class="button is-rounded is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <button class="button is-rounded">
                            <span class="icon is-small">
                                <i class="fas fa-cart-flatbed"></i>
                            </span>
                            <span class="tag is-danger">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navigation Menu End -->
    </nav>
</template>

<script>
export default {
    name: "nav-bar",
    mounted(){
        this.slides
    }
}
</script>
