<script>
     import usflag from "/img/us-flag.jpg";
     import zimflag from "/img/zw-flag.jpg";
</script>
<style lang="scss">
    @import '../styles/vars';

    .posb{
        &__blockone{
            margin: 2em;
            &--wrapper{
                width: $row;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;
            }
        }
    }
    .everyday{
        width: 100%;
        max-width: 300px;
        h2{
            font-size: 1.9em;
            font-weight: 600;
            position: relative;
            margin-bottom: 1.5em;
            &::after{
                content: '';
                width: 30px;
                border-bottom: 6px solid $orange;
                left: 0;
                bottom: -10px;
                position: absolute;
            }
        }
        ul{
            li{
                list-style: none;
                margin: 1em 0;
                a{
                    text-decoration: none;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.2em;
                    color: $black;
                    span{
                        color: $orange;
                    }
                }
            }
        }
    }
    .starter{
        background-color: $black;
        padding: 2em;
        border-bottom: 4px solid $orange;
        color: $white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h5{
            text-transform: uppercase;
            font-weight: 300;
            font-size: .9em;
        }
        h2{
                font-size: 3em;
                span{
                    font-weight: 300;
                    font-size: .7em;
                }
        }
        div{
            h3{
                font-weight: 600;
                font-size: 1.4em;
                margin-bottom: 1em;
                position: relative;
                &::after{
                    content: '';
                    width: 30px;
                    border-bottom: 6px solid $orange;
                    left: 0;
                    bottom: -15px;
                    position: absolute;
                }
            }
            p{
                margin-bottom: 1em;
                &:first-child{
                    font-weight: 600;
                }
            }
        }
        a{
            text-decoration: none;
            color: $white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: fit-content;
            gap: 10px;
            span{
                color: $orange;
            }
        }
    }
    .options{
        &__top{
            display: flex;
            flex-direction: column;
            background-color: $black;
            padding: 2em;
            width: 100%;
            form{
                display: flex;
                flex-direction: column;
                a{
                    background-color: $orange;
                    padding: .5em;
                    margin: 0 0 2em 0;
                    text-align: center;
                    color: $white;
                    font-size: 1em;
                    font-weight: 600;
                    text-decoration: none;
                    border-radius: 3px;
                }
            }
            select{
                width: 250px;
                height: 40px;
                border-radius: 3px;
                margin-bottom: .8em;
                font-size: .9em;
            }
        }
    }
    .exchange__rate{
        display: flex;
        justify-content: space-between;
        padding: 1em 2em;
        margin-top: .2em;
        background-color: $lightOrange;
        span{
            display: flex;
            align-items: end;
        }
    }
    .currency{
        &__country{
            margin-bottom: .3em;
            img{
                width: 24px;
                height: 24px;
                border-radius: 50%;
            }
        }
        h4{
            font-size: 1.5em;
            font-weight: 600;
            display: flex;
            justify-content:space-around;
        }
    }
</style>
<section>
    <div class="posb__blockone">
        <div class="posb__blockone--wrapper">
            <div class="everyday">
                <h2>Everyday banking with POSB</h2>
                <ul>
                    <li><a href="#">Corporate Banking<span class="material-icons">arrow_right_alt</span></a></li>
                    <li><a href="#">Esteem Banking<span class="material-icons">arrow_right_alt</span></a></li>
                    <li><a href="#">Agency Banking<span class="material-icons">arrow_right_alt</span></a></li>
                    <li><a href="#">International <span class="material-icons">arrow_right_alt</span></a></li>
                    <li><a href="#">Personal Accounts<span class="material-icons">arrow_right_alt</span></a></li>
                    <li><a href="#">Savings Accounts<span class="material-icons">arrow_right_alt</span></a></li>
                </ul>
            </div>
            <div class="starter">
                <h5>A Great way to start saving if you are 14-24 years old</h5>
                <div>
                    <h3>Fast Track Starter Account</h3>
                    <h2>2.50<span><sup>%</sup> p.a</span></h2>
                </div>
                <div>
                    <p>Bonus Interest on balances up to $10,000 when Bonus Criteria is met*</p>
                    <p>No monthly account maintenance fees</p>
                </div>
                <a href="#">Learn more <span class="material-icons">arrow_right_alt</span></a>
            </div>
            <div class="options">
                <div class="options__top">
                    <form>
                        <select name="options__items" id="options__items">
                            <option value="Internet Banking">Internet Banking</option>
                            <option value="Esteem Banking">Esteem Banking</option>
                        </select>
                        <a href="#">Log in</a>
                    </form>
                    <select name="options__tools" id="options__tools">
                        <option value="Calculator & Tools">Calculator & Tools</option>
                    </select>
                    <select name="options__appy" id="options__apply">
                        <option value="Calculator & Tools">Apply For</option>
                    </select>
                </div>
                <div class="exchange__rate">
                    <div class="currency">
                        <div class="currency__country"><img src="{usflag}" alt=""> USD</div>
                        <h4>1</h4>
                    </div>
                    <span class="material-icons">stop</span>
                    <div class="currency">
                        <div class="currency__country"><img src="{zimflag}" alt=""> ZWL</div>
                        <h4>85.36</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>