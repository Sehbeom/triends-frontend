<template>
    <div class="cardcontainer">
        <div class="imagetextcontainer">
            <div class="imagecircle">
                <img v-if="friend.profileimg" :src="friend.profileimg" />
                <img v-else :src="defaultimg" />
            </div>
            <div class="nametext">
                {{friend.name}}
            </div>
        </div>
        <div class="btncontainer">
            <div class="friendrequestbtn">
                <b-button 
                v-if="friendStatus == 'friend'"
                variant="danger" 
                @click="() => btnClicked(friend)">친구 삭제</b-button>
                <b-button 
                v-if="friendStatus == 'requested'"
                variant="success" disabled>요청 완료!</b-button>
                <b-button 
                v-if="friendStatus == 'other'"
                variant="success" 
                @click="() => btnClicked(friend)">친구 추가</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import defaultimg from "@/assets/icons/defaultprofile.png";
import { mapState } from "vuex";

const userStore = "userStore";

export default {
    name: "FriendCard",
    computed: {
        ...mapState(userStore, ["isLogin", "userInfo"]),
    },
    props: {
        friend: {
            type: Object
        },
        clickEvent: {
            type: Function
        },
        isFriend: {
            type: Boolean
        }
    },
    created() {
        if (this.isFriend === true) {
            this.friendStatus= "friend";
        } else {
            this.friendStatus= "other";
        }
    },
    data() {
        return {
            defaultimg: defaultimg,
            friendStatus: ""
        }
    },
    methods: {
        btnClicked: function (friend) {
            let param = {
                userId: this.userInfo.userId,
                receiverId: friend.userId
            };
            this.clickEvent(
                param,
                () => {
                    if (this.isFriend === false) {
                        this.friendStatus = "requested";
                    }
                }
            );
            console.log("login complete" + this.friendStatus[friend.userId]);
        }
    },
};
</script>

<style scoped>
.cardcontainer {
    width: 8vw;
    height: 10vw;
    min-width: 150px;
    min-height: 200px;
    border: solid 2px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;

    box-sizing: border-box;
}

.imagetextcontainer {
    flex: 3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imagecircle {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    border: solid 2px;
}

.imagecircle > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.nametext {
    margin-top: 10px;
}

.btncontainer {
    flex: 1;
    min-height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
}

</style>