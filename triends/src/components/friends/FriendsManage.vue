<template>
    <div>
        <div class="friendscontainer">
            <friends-list :friends="friends" :btnClickEvent="deleteFriend" :isFriend="true" title="친구 목록" />
        </div>
        
        <div class="friendscontainer">
            <friends-list :friends="recommendByFriends" :btnClickEvent="sendFriendRequest" :isFriend="false" title="혹시 아는 사이 아니세요?!" />
        </div>

        <div class="friendscontainer">
            <friends-list :friends="recommendByPreference" :btnClickEvent="sendFriendRequest" :isFriend="false" title="취향이 비슷한 사람들이에요!!!" />
        </div>
    </div>
</template>

<script>
import FriendsList from "./FriendsList.vue"
import { getFriends, getRecommendOfFriends, getRecommendOfPreference, sendFriendRequest } from "@/apis/friends";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
    name: "FriendsManage",
    components: {
        FriendsList,
    },
    computed: {
        ...mapState(userStore, ["isLogin", "userInfo"]),
    },
    created() {
        if (this.isLogin) {
            getFriends(
                this.userInfo.userId,
                ({ data }) => {
                    this.friends = data.data;
                    console.log("friends: " + this.friends);
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            );
            getRecommendOfFriends(
                this.userInfo.userId,
                ({ data }) => {
                    this.recommendByFriends = data.data;
                    console.log("friends: " + this.friends);
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            );
            getRecommendOfPreference(
                this.userInfo.userId,
                ({ data }) => {
                    this.recommendByPreference = data.data;
                    console.log("friends: " + this.friends);
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            )
        }
    },
    data() {
        return {
            friends: [],
            recommendByFriends: [],
            recommendByPreference: []
        }
    },
    methods: {
        sendFriendRequest: function (param, success, fail) {
            sendFriendRequest(param, success, fail);
        },
        deleteFriend: function (userId) {
            console.log(userId);
        }
    }, 
};
</script>

<style scoped>
.friendscontainer {
    margin-bottom: 100px;
}
</style>