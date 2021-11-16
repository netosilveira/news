<template>
  <zd-card
    name="container"
    component="ZdContainer"
    cssClass="zd-ma-2"
    cssStyle="height:calc(100vh - 80px)"
    v-bind="{
      name: 'card',
      component: 'ZdCard',
      height: '100%',
      children: [
        {
          name: 'navigationCarousel',
          component: 'ZdCarousel',
          prevButton: {
            name: 'prevButtonNavigation',
            component: 'ZdButton',
            iconName: 'arrow-left',
            icon: 'true',
            large: true,
          },
          nextButton: {
            name: 'nextButtonNavigation',
            component: 'ZdButton',
            iconName: 'arrow-right',
            icon: 'true',
            large: true,
          },
          children: [
            {
              name: 'slideNavigation1',
              component: 'ZdRow',
              justify: 'center',
              children: [
                {
                  name: 'slideCardNavigation1',
                  component: 'ZdCard',
                  width: '800',
                  height: '450',
                  img: 'https://picsum.photos/id/350/800/400',
                },
              ],
            },
            {
              name: 'slideNavigation2',
              component: 'ZdRow',
              justify: 'center',
              children: [
                {
                  name: 'slideCardNavigation2',
                  component: 'ZdCard',
                  width: '800',
                  height: '450',
                  img: 'https://picsum.photos/id/353/800/400',
                },
              ],
            },
            {
              name: 'slideNavigation3',
              component: 'ZdRow',
              justify: 'center',
              children: [
                {
                  name: 'slideCardNavigation3',
                  component: 'ZdCard',
                  width: '800',
                  height: '450',
                  img: 'https://picsum.photos/id/368/800/400',
                },
              ],
            },
          ],
        },
      ],
    }"
  />
</template>

<script>
export default {
  name: "HomeItem",
};
</script>

<style lang="css">
</style>
