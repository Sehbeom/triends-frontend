<template>
    <div>
        <div class="friendscontainer">
            <friends-list :friends="friends" title="친구 목록" />
        </div>
        
        <div class="friendscontainer">
            <friends-list :friends="friends" title="혹시 아는 사이 아니세요?!" />
        </div>

        <div class="friendscontainer">
            <friends-list :friends="friends" title="취향이 비슷한 사람들이에요!!!" />
        </div>
    </div>
</template>

<script>
import FriendsList from "./FriendsList.vue"
// import axios from "@/util/http-common";

export default {
    name: "FriendsManage",
    components: {
        FriendsList,
    },
    // created() {
    //     axios({
    //         method: "get",
    //         url: "/friends"
    //     })
    //     .then((response) => {
    //         this.friends = response.data;
    //     })

    //     const friends = "friends";
    //     const preference = "preference";
    //     axios({
    //         method: "get",
    //         url: "/friends/recommend?type=" + friends
    //     })
    //     .then((response) => {
    //         this.recommendByFriends = response.data;
    //     })

    //     axios({
    //         method: "get",
    //         url: "/friends/recommend?type=" + preference
    //     })
    //     .then((response) => {
    //         this.recommendByPreference = response.data;
    //     })
    // },
    data() {
        return {
            // friends: [],
            // recommendByFriends: [],
            // recommendByPreference: []
            friends: [
                {
                    userId: 1,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 2,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 3,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 4,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 5,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 6,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 7,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 8,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 9,
                    // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                },
                {
                    userId: 10,
                    // // profileimg: defaultimage,
                    name: "이름",
                    sendFriendRequest: this.sendFriendRequest,
                }
            ]
        }
    },
    methods: {
        sendFriendRequest: function(userId) {
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