<template>
    <div class="listcontainer">
        <div class="titlecontainer">
            <p>{{title}}</p>
        </div>
        <div class="searchinput" v-if="isSearch">
            <div class="inputcontainer">
                <b-form-input v-model="keyword" @keyup="searchByKeyword" placeholder="친구의 이름을 입력해 주세요!"></b-form-input>
            </div>
            
        </div>
        <div class="scrollcontainer" v-if="friends.length > 0">
            <div 
            class="cardcontainer" 
            v-for="friend in friends" 
            :key="friend.userId">
                <friend-card-vue 
                :friend="friend"
                :clickEvent="btnClickEvent"
                :isFriend="isFriend" />
            </div>    
        </div>
        <div v-else>
            <div class="nofriend" v-if="isSearch">
                <h2>검색창에 이름을 입력해주세요!</h2>
            </div>
            <div class="nofriend" v-else>
                <h2>친구 목록이 비어있어요!</h2>
                <h4>아래 추천 친구를 통해 새로운 친구를 만들어보세요!</h4>
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
        },
        isSearch: {
            type: Boolean
        },
        searchEvent: {
            type: Function
        }
    },
    data() {
        return {
            keyword: ""
        }
    },
    methods: {
        searchByKeyword: function () {
            let param = {
                userId: this.userInfo.userId,
                keyword: this.keyword
            };
            this.searchEvent(param);
        }
    }
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

.nofriend{
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.searchinput {
    width: 100%;
    padding-left: 40px;
    margin-bottom: 40px;
}

.inputcontainer {
    width: 30%;
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