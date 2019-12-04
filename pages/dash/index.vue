<template>
    <v-sheet
        width="100%"
        height="100%"
        color="#36d6d0"
        id="dash-app"
    >

        <v-row align="center">
            <v-col
                class="d-none d-sm-flex"
                cols="1"
            >
                <Horas :horas="times"/>
            </v-col>

            <v-col
                
                class="col-xs-12 col-sm-11"
            >
                <Dias :tabs="tabs"/>

            </v-col>
        
        </v-row>

    </v-sheet>

</template>

<script src="./index.vue.js"></script>

<style>
    #dash-app .row {
        margin: 0px !important;
    }

    #dash-app .col{
        padding: 0px !important;
    }
    .v-sheet.theme--light {
        border-radius: 45px;
    }

    #card-dash {
        border-top-left-radius: 45px;
        border-bottom-left-radius: 45px;
        margin: 0px !important;
    }

    .v-slide-group__content a {
        width: 50px !important;
        height: 50px !important;
        border-radius: 16px !important;
    }
    .v-btn__content {
        text-align: center;
        font-weight: bold;
        color: #3e45cd;
    }
    .v-slide-item--active .v-btn__content{
        color: #fff !important;
    }

    .v-slide-group__content .v-btn:not(.v-btn--text):not(.v-btn--outlined).v-btn--active:before {
        opacity: 0
    }

    .v-slide-group__content .theme--light.v-btn--active:before, .theme--light.v-btn--active:hover:before, .theme--light.v-btn:focus:before {
        opacity: 0
    }
</style>