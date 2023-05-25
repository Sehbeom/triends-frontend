<template>
    <div class="listcontainer">
        <div class="titlecontainer">
            <p>{{title}}</p>
        </div>
        <div class="scrollcontainer">
            <div class="cardcontainer" v-for="friend in friends" :key="friend.userId">
                <friend-card-vue 
                :friend="friend"
                :clickEvent="btnClickEvent"
                :isFriend="isFriend" />
            </div>          
        </div>
        
    </div>
</template>

<script>
import FriendCardVue from "./FriendCard.vue";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
    name: "FriendsList",
    components: {
        FriendCardVue,
    },
    computed: {
        ...mapState(userStore, ["isLogin", "userInfo"]),
    },
    props: {
        title: {
            type: String
        },
        friends: {
            type: Array
        },
        btnClickEvent: {
            type: Function
        },
        isFriend: {
            type: Boolean
        }
    },
};
</script>

<style scoped>
.listcontainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titlecontainer {
    width: 95%;
    padding-left: 20px;
    text-align: left;
}

.titlecontainer > p {
    font-size: 30px;
    font-weight: 600;
}

.scrollcontainer {
    width: 95%;

    display: flex;
    flex-direction: row;

    box-sizing: border-box;

    overflow: scroll;

    padding-bottom: 5px;
}

::-webkit-scrollbar {
  width: 0px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: transparent; 
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.1); 
  border-radius: 5px;
  transition: background-color 3s ease-out;
}

::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.6); 
  transition: background-color 3s ease-out;
}

.cardcontainer {
    margin-right: 30px;
}
</style>