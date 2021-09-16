<script>

    import bg from "/img/bg.png";

</script>
<style lang="scss">
    @import '../styles/vars';

    .posb{
        &__slider{
            width: 100%;
            // height: 375px;
            background-color: $orange;
            padding: 2em;
            &--bg{
                text-align: right;
            }
            &--wrapper{
                width: $row;
                margin: 0 auto;
                position: relative;
            }
            &--inner{
                position: absolute;
                display: flex;
                top: 2em;
                bottom: 0;
            }
        }
    }
    .slider__content{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        max-width: 675px;
        div{
            h3{
                font-size: 2.5em;
                color: $white;
                text-shadow: 1px 3px 5px $black;
            }
            h5{
                font-size: 1.8em;
                color: $white;
                font-weight: 300;
            }
            a{
                background-color: $lightOrange;
                padding: 1em 2em;
                text-decoration: none;
                color: $black;
                font-size: 1.2em;
                font-weight: 600;
                display: flex;
                width: max-content;
                gap: 1em;
                border-radius: 5px;
                span{
                    display: flex;
                    justify-self: flex-end;
                }
            }
        }
    }
</style>
<section>
    <div class="posb__slider">
        <div class="posb__slider--wrapper ">
            <div class="posb__slider--bg">
                <img src="{bg}" alt="">
            </div>
            <div class="posb__slider--inner">
                <div class="slider__content">
                    <div>
                        <h3>An easy way to keep your savings goals on track</h3>
                    </div>
                    <div>
                        <h5>
                            Enjoy the benefits of priority banking at Esteem Banking and dedicated private banking counters in POSB branches.
                        </h5>
                    </div>
                    <div>
                        <a href="#">Learn More <span class="material-icons">north_east</span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>