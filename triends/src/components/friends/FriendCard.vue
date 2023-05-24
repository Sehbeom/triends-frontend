<template>
    <div class="cardcontainer">
        <div class="imagetextcontainer">
            <div class="imagecircle">
                <img v-if="imgsrc" :src="imgsrc" />
                <img v-else :src="defaultimg" />
            </div>
            <div class="nametext">
                {{userName}}
            </div>
        </div>
        <div class="btncontainer">
            <div class="friendrequestbtn">
                <b-button 
                v-if="friendStatus == 'friend'"
                variant="danger" 
                @click="clickEvent(userId)">친구 삭제</b-button>
                <b-button 
                v-if="friendStatus == 'requested'"
                variant="success" disabled>요청 완료!</b-button>
                <b-button 
                v-if="!friendStatus"
                variant="success" 
                @click="clickEvent(userId)">친구 추가</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import defaultimg from "@/assets/icons/defaultprofile.png";

export default {
    name: "FriendCard",
    props: {
        userId: {
            type: Number
        },
        imgsrc: {
            type: String
        },
        userName: {
            type: String
        },
        clickEvent: {
            type: Function
        },
        friendStatus: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            defaultimg: defaultimg
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