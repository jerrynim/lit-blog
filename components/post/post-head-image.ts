import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { resetCss } from "@styles";
const images = [
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1634978785/a-frame_gtk4je.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1639296340/lit-blog/closure_fjqvyd.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1631084015/lit-blog/balloon_nosppg.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1640683677/lit-blog/semi_qqxojj.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1640702976/lit-blog/key_fzonmy.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1640095781/lit-blog/nono_knwr4l.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1633620056/lit-blog/semantic_wlbgsb.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1628066597/lit-blog/lit-post-head_tjswjn.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1635330118/lit-blog/route_fjzln0.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1633615729/lit-blog/vanila_azzeyy.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1627115456/lit-blog/Desktop_-_3_yx69ez.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623154/lit-blog/Desktop_-_6_a9c6iv.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_4_mex9pw.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_9_byznng.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_10_fdjrvv.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_7_nkgpxv.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_14_narsbb.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_13_qfiiaj.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_16_swyn3i.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_18_aintim.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_17_uluu1z.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_12_uzlnkb.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_11_tvwgsv.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623155/lit-blog/Desktop_-_15_yeywqe.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_20_jlvtpu.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_22_wq6td6.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623156/lit-blog/Desktop_-_19_vo3zuw.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_30_hw2te8.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_25_xe4ksy.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_23_pspzcz.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_26_wght7t.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_31_rfmthe.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_28_hmlxal.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_29_oefu3x.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_32_fn1u8s.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_33_jxkrqk.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_35_lxtxpf.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_27_rc0oxq.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_34_v7igfp.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_36_njetbd.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_37_emu0zw.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_38_zip8pg.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_41_ja1wly.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623157/lit-blog/Desktop_-_24_aklixc.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_40_wnhcko.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/Desktop_-_47_s96koq.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_43_lp8jfg.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_45_wenm6r.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623158/lit-blog/Desktop_-_46_q3k5tg.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/Desktop_-_39_okpwyp.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_HBABoZYH0yI_dw5r9p.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_Sd6RpQexItw_zprkha.jpg",
    "https://res.cloudinary.com/dij9kacx9/image/upload/v1646623159/lit-blog/unsplash_OBmBHmrc3pw_zm6v0l.jpg",
];
const getRandomHeadImage = () => {
    return images[Math.round(Math.random() * images.length)].replace(
        "/upload/",
        "/upload/f_auto,q_auto/",
    );
};
@customElement("post-head-image")
export class PostHeadImage extends LitElement {
    static styles = [
        resetCss,
        css`
            .post-head-image-wrapper {
                position: relative;
                display: block;
                width: 100%;
                padding-bottom: 30%;
                margin-bottom: 80px;
            }
            @media (max-width: 700px) {
                .post-head-image-wrapper {
                    margin-bottom: 20px;
                }
            }
            div {
                width: 100%;
                height: 100%;
                position: absolute;
                background-attachment: fixed;
                background-repeat: no-repeat;
                background-position: 0 68px;
                background-size: contain;
            }
        `,
    ];

    @property({
        type: String,
        attribute: true,
        converter: (value) => {
            console.log(value);
            if (!value) {
                return getRandomHeadImage();
            }
            // quality auto, format auto
            return value?.replace("/upload/", "/upload/f_auto,q_auto/");
        },
    })
    src = "";

    protected render() {
        return html`<div class="post-head-image-wrapper">
            <div style="background-image: url(${this.src});"></div>
        </div> `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "post-head-image": PostHeadImage;
    }
}
