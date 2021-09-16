<script>
    import logo from "/img/logo.png";
</script>
<style lang="scss">
    @import '../styles/vars';

    .posb__header{
            width: 100%;
            height: 100%;
            // max-height: 135px;
            &--topstrip{
                background-color: $orange;
                height: 100%;
                max-height: 40px;
                padding: 2em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: $black;
                ul{
                    display: flex;
                    li{
                        list-style: none;
                    }
                }
                a{
                    text-decoration: none;
                }
            }
            &--bottomstrip{
                background-color: $black;
                height: 100%;
                // max-height: 70px;
                padding: 1em 2em;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .posb__logo{
                    img{
                        width: 140px;
                    }
                }
                .posb__menu{
                    display: flex;
                    ul{
                        display: flex;

                        li{
                            text-decoration: none;
                            margin-right: 5em;
                            a{
                                text-decoration: none;
                                color: #fff;
                                font-weight: 600;
                                font-size: 1.2em;
                            }
                        }
                    }
                }
                .posb__search{
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    span{
                        color: $white;
                        margin-right: .5em;
                        font-size: 2em;
                    }
                    h4{
                        color: $orange;
                    }
                }
            }
        }
        .topstrip{
            &__menu{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            max-width: 500px;
                li{
                    margin-right: 1em;
                }
                a{
                    color: $black;
                }
            }
            &__contacts{
                ul{
                    li{
                        margin-right: .5em;
                        padding-right: .5em;
                        &:first-child{
                            border-right: 2px solid $black;
                        }
                    }
                }
            }
        }
        .online_bank_button{
            background-color: $black;
            padding: .5em .5em;
            border-radius: 5px;
            a{
                color: $white;
            }
        }

</style>

<section>
    <div class="posb__header">
        <div class="posb__header--topstrip">
            <div class="topstrip__contacts">
                <ul>
                    <li>posb@posb.co.zw</li>
                    <li>+263 242 252595/6</li>
                </ul>
            </div>
            <div class="topstrip__menu">
                <ul>
                    <li><a href="#">Procurement</a></li>
                    <li><a href="#">Forms</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Find a Branch</a></li>
                </ul>
                <div class="online_bank_button">
                    <a href="#">Online Banking</a>
                </div>
            </div>
        </div>
        <div class="posb__header--bottomstrip">
            <div class="posb__logo">
                <img src="{ logo }" alt="">
            </div>
            <div class="posb__menu">
                <ul>
                    <li><a href="#">Personal</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Institutional</a></li>
                    <li><a href="#">Money Transfer Services</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Help & Support</a></li>
                </ul>
            </div>
            <div class="posb__search">
                <span class="material-icons">search</span>
                <h4>Search</h4>
            </div>
        </div>
    </div>
</section>