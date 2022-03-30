<template>
  <nav class="site-navigation">
      <!-- <p class="text">{{$mq}}</p> -->
        <ul class="nav-list" v-if="$mq !== 'mobile'">
            <li class="nav-link" :class="{ 'active' : currentRouteName === 'home'}">
              <!-- <p v-if="$mq == 'desktop'"  class="nav-text nav-number">00</p> -->
              <router-link class="nav-text" v-if="$mq === 'desktop'" to="/">00 Home</router-link>
              <router-link class="nav-text" v-else to="/">Home</router-link>
            </li>
            <li class="nav-link" :class="{ 'active' : currentRouteName === 'destination'}">
              <!-- <p v-if="$mq == 'desktop'" class="nav-text nav-number">01</p> -->
              <router-link class="nav-text" v-if="$mq === 'desktop'" to="/Destination">01 Destination</router-link>
              <router-link class="nav-text" v-else to="/Destination">Destination</router-link>
            </li>
            <li class="nav-link" :class="{ 'active' : currentRouteName === 'crew'}">
              <!-- <p v-if="$mq == 'desktop'" class="nav-text nav-number">02</p> -->
              <router-link class="nav-text" v-if="$mq === 'desktop'" to="/Crew">02 Crew</router-link>
              <router-link class="nav-text" v-else to="/Crew">Crew</router-link>
            </li>
            <li class="nav-link" :class="{ 'active' : currentRouteName === 'technology'}">
              <!-- <p v-if="$mq == 'desktop'" class="nav-text nav-number">03</p> -->
              <router-link  class="nav-text" v-if="$mq === 'desktop'" to="/Technology">03 Technology</router-link>
              <router-link  class="nav-text" v-else to="/Technology">Technology</router-link>
            </li>
        </ul>
        <div class="nav-container">
            <button @click="showMobileMenu = !showMobileMenu" class="hamburger-meny" v-if="$mq == 'mobile' && !showMobileMenu">
                <img class="hamburger-meny" src="../../src/assets/shared/icon-hamburger.svg" alt="Hamburger meny button">
            </button>
            <ul class="nav-list-mobile nav-list" v-if="showMobileMenu && $mq == 'mobile'">
                <li class="close-icon-container">
                    <button @click="showMobileMenu = !showMobileMenu" class="close-icon-button" v-if="$mq == 'mobile' && showMobileMenu">
                        <img class="close-icon-image" src="../../src/assets/shared/icon-close.svg" width="20" heigth="20" alt="Close meny icon">
                    </button>  
                </li>
                <li class="nav-link">
                    <!-- <p class="nav-text nav-letters">00</p> -->
                    <router-link class="nav-text" to="/">00 Home</router-link>
                </li>
                <li class="nav-link">
                    <!-- <p class="nav-text">01</p> -->
                    <router-link class="nav-text" to="/Destination">01 Destination</router-link>
                </li>
                <li class="nav-link">
                    <!-- <p class="nav-text">02</p> -->
                    <router-link class="nav-text" to="/Crew">02 Crew</router-link>
                </li>
                <li class="nav-link">
                    <!-- <p class="nav-text">03</p> -->
                    <router-link  class="nav-text" to="/Technology">03 Technology</router-link>
                </li>
            </ul>
        </div>  
  </nav>
</template>

<script>
export default {
    data(){
        return{
            showMobileMenu : false
        }
    }, computed:{
        currentRouteName() {
            console.log(this.$route.name)
            return this.$route.name;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/_colors";
     .site-navigation{
        display: flex;  
        .nav-list{
            padding: 0rem 2rem;
            display: flex;          
            align-items: center;
            justify-content: center;
            background-color: rgba(56, 59, 75, 0.5);
            .nav-number{
                margin-right: 0.3rem;
                            
            }
            .active{
                 border-bottom: 2px solid rgba($base-light, 1);
            }
            .nav-link{
                display: flex;
                min-height: 100%;
                flex-shrink: 1;
                align-items: center;
                justify-content: center;
                margin: 0rem 1rem;
                &:hover{  
                    border-bottom: 2px solid rgba($base-light, 0.5);
                }
            } 
        }
        @media only screen and (max-width: 600px) and (min-width: 448px)  {
            .nav-list{
               display: grid; 
               grid-template-columns: 1fr 1.7fr;
            }
            
        }
        .nav-container{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            .nav-list-mobile.nav-list{
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                min-height: 100vh;
                min-width: 55%;
                top: 0;
                right: 0;
                background-color: rgba(56, 59, 75, 0.7);
                .close-icon-container{
                    align-self: flex-end;
                    margin: 2.5rem 0rem;
                }
                .nav-link{
                    margin: 0.65rem 0rem;
                }
            }
        }   
        
    }
        
    
  
</style>