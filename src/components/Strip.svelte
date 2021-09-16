<script></script>
<style lang="scss">
    @import '../styles/vars';

    .posb{
        &__strip{
            width: 100%;
            background-color: $lightOrange;
            padding: 0 2em;
        }
        &__wrapper{
            width: $row;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            ul{
                display: flex;
                align-items: center;
                li{
                    list-style: none;
                    margin-left: 2em;
                    padding: 0 .2em;
                    &:first-child{
                        background-color: $white;
                        height: 5em;
                        display: flex;
                        align-items: center;
                        border-left: 1px solid #000;
                        border-right: 1px solid #000;
                        border-top: 3px solid #000;
                    }
                    a{
                        text-decoration: none;
                        color: $black;
                        font-size: 1.2em;
                    }
                }
            }
            h4{
                font-size: 1.2em;
                font-weight: 500;
            }
        }
    }
</style>
<section>
    <div class="posb__strip">
        <div class="posb__wrapper">
            <h4>Show me more about</h4>
            <ul>
                <li><a href="#">Bank Accounts</a></li>
                <li><a href="#">Home Loans</a></li>
                <li><a href="#">Credit Loans</a></li>
                <li><a href="#">Personal Loans</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Delivery Channel</a></li>
            </ul>
        </div>
    </div>
</section>