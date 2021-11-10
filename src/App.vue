<template>
  <v-app id="app">
    <component v-if="$route.name !== 'notfound'" :is="menu.component" v-bind="menu"></component>
    <component v-if="$route.name !== 'notfound'" :is="header.component" v-bind="header"></component>

    <v-main>
      <router-view :key="$route.path"/>
    </v-main>

    <!-- Modal -->
    <zd-modal v-bind="{ name: 'appModal '}" />

    <!-- Alert -->
    <zd-alert v-bind="{ name: 'appAlert '}" />

    <!-- Dialog -->
    <zd-dialog v-bind="{ name: 'appDialog '}" />

    <!-- Loading -->
    <zd-loading v-bind="{ name: 'appLoading' }" />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { IMenu, IHeader } from '@zeedhi/common';

@Component
export default class App extends Vue {
  public menu!: IMenu;
  public header!: IHeader;

  public created() {

    this.menu = {
      component: 'ZdMenu',
      name: 'main-menu',
      cssClass: 'main-menu',
      app: true,
      clipped: true,
      floating: true,
      mini: false,
      miniWidth: 70,
      mobileBreakpoint: 800,
      closeToMini: true,
      isLocal: true,
      isVisible: true,
      itemsUrl: 'menu',
    };

    this.header = {
      component: 'ZdHeader',
      name: 'main-header',
      app: true,
      color:"-",
      cssClass: 'main-header',
      cssStyle: 'border-bottom: 3px solid purple;',
      height: 64,
      elevation: 13,
      leftSlot: [
        {
          name: 'menu-button',
          component: 'ZdMenuButton',
          menuName: 'main-menu',
          small: true,
          keyMap: {
            'ctrl+m': {
              event: '{{AppController.toggleMenu}}'
            },
          },
        },
      ],
      centerSlot: [
        {
          name: "textResult",
          component: "ZdText",
          text: "News Feed",
          tag: "h1"
        }
      ],
      rightSlot: [
      ]
    }
  }
}
</script>
