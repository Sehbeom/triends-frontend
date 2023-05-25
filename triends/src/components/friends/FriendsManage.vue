<template>
    <div>
        <div class="friendscontainer">
            <friends-list :friends="friends" :btnClickEvent="deleteFriend" :isFriend="true" title="친구 목록" />
        </div>
        
        <div class="friendscontainer">
            <friends-list :friends="recommendByFriends" :btnClickEvent="sendFriend" :isFriend="false" title="혹시 아는 사이 아니세요?!" />
        </div>

        <div class="friendscontainer">
            <friends-list :friends="recommendByPreference" :btnClickEvent="sendFriend" :isFriend="false" title="취향이 비슷한 사람들이에요!!!" />
        </div>
    </div>
</template>

<script>
import FriendsList from "./FriendsList.vue"
import { getFriends, getRecommendOfFriends, getRecommendOfPreference, sendFriendRequest, deleteFriend } from "@/apis/friends";
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
            this.getFriendsList();
            this.getRecommendOfFriendsList();
            this.getRecommendOfPreferenceList();
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
        getFriendsList: function() {
            getFriends(
                this.userInfo.userId,
                ({ data }) => {
                    this.friends = data.data;
                    console.log("just friends: ");
                    console.log(this.friends);
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            );
        },
        getRecommendOfFriendsList: function() {
            getRecommendOfFriends(
                this.userInfo.userId,
                ({ data }) => {
                    this.recommendByFriends = data.data;
                    console.log("friends: ");
                    console.log(this.recommendByFriends);
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            );
        },
        getRecommendOfPreferenceList: function() {
            getRecommendOfPreference(
                this.userInfo.userId,
                ({ data }) => {
                    this.recommendByPreference = data.data;
                    console.log("friends: ");
                    console.log(this.recommendByPreference)
                },
                ({ error }) => {
                    console.log(error);
                    this.$router.push({ name: "error" });
                }
            );
        },
        sendFriend: function(param, success){
            console.log(param);
            console.log(success);
            sendFriendRequest(
                param,
                success,
                ({error}) => {
                    console.log(error);
                    this.$router.push({name: "error"});
                }
            );
        },
        deleteFriend: function(param, success) {
            console.log(param);
            console.log(success);
            deleteFriend(
                param, 
                () => {
                    success();
                    this.getFriendsList();
                },
                ({error}) => {
                    console.log(error);
                    this.$router.push({name: "error"});
                }
            );
        }

    },
};
</script>

<style scoped>
.friendscontainer {
    margin-bottom: 100px;
}
</style>