import Vue from 'vue';
import "quasar/dist/quasar.css";

import Quasar, {
    QSlideItem,
    QList,
    QItem,
    QItemSection,
    QNoSsr
} from "quasar";

import {Notify} from "quasar";

Vue.use(Quasar, {
    plugins: [
        Notify
    ],
    components: [
        QSlideItem,
        QList,
        QItem,
        QItemSection,
        QNoSsr
    ]
});




