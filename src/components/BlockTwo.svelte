<script></script>
<style lang="scss">
    @import '../styles/vars';

    .posb{
        &__blocktwo{
            width: 100%;
            background-color: $lightBlue;
            padding: 2em 1em;
            &--wrapper{
                width: $row;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
            }
        }
        &__widgetslink{
            cursor: pointer;
            background-color: $white;
            padding: 1em;
            width: 100%;
            max-width: 350px;
            height: 250px;
            max-height: 250px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            i{
                font-size: 2.2em;
            }
            div{
                h3{
                    font-size: 1.5em;
                    font-weight: 600;
                    width: 50%;
                    margin-bottom: 1em;
                }
            }
            a{
                text-decoration: none;
                color: $black;
                display: flex;
                align-items: center;
                gap: 2em;
                span{
                    color: $orange;
                }
            }
        }
    }
</style>
<section>
    <div class="posb__blocktwo">
        <div class="posb__blocktwo--wrapper">
            <div class="posb__widgetslink">
                <i class="material-icons-outlined">calculate</i>
                <div>
                    <h3>Tools and calculators</h3>
                    <p>We’ll help you work it out.</p>
                </div>
                <a href="#">Use our calculators <span class="material-icons">arrow_right_alt</span></a>
            </div>
            <div class="posb__widgetslink">
                <i class="material-icons-outlined">laptop</i>
                <div>
                    <h3>Opened a new account?</h3>
                    <p>Make the most of it and get started with these easy steps</p>
                </div>
                <a href="#">Find out more <span class="material-icons">arrow_right_alt</span></a>
            </div>
            <div class="posb__widgetslink">
                <i class="material-icons-outlined">quiz</i>
                <div>
                    <h3>FAQs</h3>
                    <p>Find the answer to your frequently asked questions.</p>
                </div>
                <a href="#">Go to FAQs <span class="material-icons">arrow_right_alt</span></a>
            </div>
        </div>
    </div>
</section>