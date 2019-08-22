<template>
  <header class="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center border-t-3 border-primary">
      <g-link to="/" class="block text-left text-primary text-2xl font-bold">
        Grid<span class="text-accent">Fire</span>
      </g-link>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block"><svg class="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
      <nav>
        <ul class="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
          <li><g-link to="/" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">Home</g-link></li>
          <li><g-link to="/about" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">About</g-link></li>
          <span class="flex" v-if="$auth.isLoggedIn">
            <Logout></Logout>
              <div class="md:ml-4 flex items-center justify-start md:mb-0 mb-4">
                <img :src="$auth.currentUser.photoURL" class="rounded-full w-10 h-10 border-2 border-transparent">
              </div>
            <li><p class="md:p-4 py-3 px-0 block border-b-2 border-transparent">{{$auth.currentUser.displayName}}</p></li>
          </span>
            <li v-else><g-link to="/login" class="md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-primary">Log In</g-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>