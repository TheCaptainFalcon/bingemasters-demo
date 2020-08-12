import React, {Component} from 'react';
import styled from 'styled-components';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
import Register from './Register';
import Login from './Login';
import tv_static2 from '../tv_static2.jpg';
import { connect } from 'react-redux';
import SelectDifficulty from './SelectDifficulty';
import silhouette from '../silhouette.jpg';


const StartGameBackground = styled.div`
    background: url(${tv_static2}) no-repeat center center fixed;
    background-size: cover;
    height: 100vh;
    font-size: 16px;
`
const StyledStartGame = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 12.5rem;
    height: 12.5rem;
    margin: 0 auto;
    position: relative;
    top: 4rem;
    @media screen and (max-width: 60rem) {
        position: relative;
        top: 1rem;    
    }
    @media (width: 23.438rem) and (height: 50.75rem) {
        position: relative;
        top: 2.5rem;
    }
    @media (width: 23.438rem) and (height: 41.688rem) {
        position: relative;
        top: -1rem;
    }
    @media (width: 22.5rem) and (height: 40rem) {
        position: relative;
        top: -1.5rem;
    }
    @media screen and (max-width: 20rem) {
        position: relative;
        top: 3rem;
    }
    @media (width: 20rem) and (height: 35.5rem) {
        position: relative;
        top: -1rem;
    }
`

const StartGameTitle = styled.h1`
    color: pink;
    font-family: 'Retro', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 5rem;
    font-weight: bolder;
    text-shadow: -1.1px 0 black, 0 1.1px black, 1.1px 0 black, 0 -1.1px black;
    @media screen and (max-width: 40.625rem) {
        font-size: 3.25rem;
    }
    @media screen and (max-width: 26.563rem) {
        font-size: 3rem;
        position: relative;
        top: 0.4rem;
    }
    
    @media screen and (max-width: 23.438rem) {
        position: relative;
        top: 0.6rem;
    }
    @media screen and (max-width: 20rem) {
        font-size: 2.5rem;
    }    
`;

const ImageWrapper = styled.div`
    position: relative;
    bottom: 2rem;
    .theActorImg {
        border-radius: 0.625rem;
        box-sizing: border-box;
        border: solid 0.5rem black;
        width: 20rem;
        height: 20rem;
        position: relative;
        top: -0.5rem;
        @media screen and (max-width: 60rem) {
            width: 18rem;
            height: 18rem;
            position: relative;
            top: 0rem;
        }
        @media (width: 48rem) and (height: 47.938rem) {
            position: relative;
            top: -0.5rem;
        }
        @media (width: 26.563rem) and (height: 47.938rem) {
            position: relative;
            top: 0.8rem;
        }
        
        @media (width: 25.875rem) and (height: 46rem) {
            position: relative;
            top: 0.8rem;
        }
        @media (width: 25.688rem) and (height: 51.438rem) {
            position: relative;
            top: 0.8rem;
        }
        @media (width: 25.688rem) and (height: 45.688rem) {
            position: relative;
            top: 0.8rem;
        }
        @media screen and (max-width: 23.438rem) {
            position: relative;
            top: 0.8rem;
        }
        @media screen and (max-width: 20rem) {
            width: 16rem;
            height: 16rem;
            position: relative;
            top: 1rem;
        }
        @media (width: 20rem) and (height: 35.5rem) {
            width: 14rem;
            height: 14rem;    
        }
    }
`

const ButtonLine = styled.div`
    display: flex;
    position: relative;
    top: 2rem;
    right: 0.5rem;
    @media screen and (max-width: 60rem) {
        flex-direction: column;
        position: relative;
        right: 0rem;    
    }
    @media (width: 48rem) and (height: 64rem) {
        flex-direction: row;
    }
    @media (width: 48rem) and (height: 47.938rem) {
        flex-direction: row;
    }
`

const MenuButtons = styled.button`
    background-color: pink;
    color: black;
    position: relative;
    bottom: 2.5rem;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans MT', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.5rem;
    margin-right: 1rem;
    width: 9.5rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
`;

const AuthButtons = styled.button`
    background-color: papayawhip;
    color: black;
    position: relative;
    bottom: 2.5rem;
    :hover {color: white};
    transition: color .1s;
    font-family: 'Gill Sans MT', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 0.875rem;
    padding: 0.625rem;
    margin: 0.5rem;
    margin-right: 1rem;
    width: 9.5rem;
    border-radius: 0.5rem;
    box-sizing: border-box;
    border: solid 0.188rem black;
`;

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            clickedGame: false,
            clickedHowTo: false,
            clickedLeaderboard: false,
            clickedRegister: false,
            clickedLogin: false
        }
        this.handleClickGame = this.handleClickGame.bind(this);
        this.handleClickHowTo = this.handleClickHowTo.bind(this);
        this.handleClickLeaderboard = this.handleClickLeaderboard.bind(this);
        this.handleClickRegister = this.handleClickRegister.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickGame () {
        this.setState({
          clickedGame: true,
          clickedHowTo: false,
          clickedLeaderboard: false
        });
      };

    handleClickHowTo () {
        this.setState({
            clickedGame: false,
            clickedHowTo: true,
            clickedLeaderboard: false
        });
    };

    handleClickLeaderboard () {
        this.setState({
            clickedGame: false,
            clickedHowTo: false,
            clickedLeaderboard: true
        });
    };

    handleClickRegister() {
        this.setState({
            clickedRegister: true
        });
    };

    handleClickLogin() {
        this.setState({
            clickedLogin: true
        });
    };

    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <button type='submit' onClick= {() => {window.open("/auth/google","_self")}} style={{
                    backgroundColor: 'black',
                    color: 'pink',
                    // 'a:hover': {color: 'white'},
                    // transition: {color: '.1s'},
                    fontFamily: 'Gill Sans', 'Gill Sans MT': 'Calibri', 'TrebuchetMS': 'sansSerif',
                    fontSize: '1rem',
                    padding: '0.625rem',
                    margin: '0.5rem',
                    height: '3rem',
                    width: '9.5rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box',
                    border: 'solid', '0.188rem': 'black',
                    position: 'relative',
                    bottom: '2.5rem'
                }}
                    >Login with Google</button>
            default: 
                return <button type='submit' onClick= {() => {window.open("/api/logout","_self")}} style={{
                    backgroundColor: 'black',
                    color: 'pink',
                    'a:hover': {color: 'white'},
                    transition: {color: '.1s'},
                    fontFamily: 'Gill Sans', 'Gill Sans MT': 'Calibri', 'TrebuchetMS': 'sansSerif',
                    fontSize: '1rem',
                    padding: '0.625rem',
                    margin: '0.5rem',
                    height: '3rem',
                    width: '9.5rem',
                    borderRadius: '0.5rem',
                    boxSizing: 'border-box',
                    border: 'solid', '0.188rem': 'black',
                    position: 'relative',
                    bottom: '2.5rem'
                }}
                >Logout</button>
        }
    }

    render() {
        // dev test
        console.log(this.props);

        if (!this.state.clickedGame && !this.state.clickedHowTo && !this.state.clickedLeaderboard && !this.state.clickedRegister) {

        return (
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <ImageWrapper>
                        <img className="theActorImg" src={silhouette} alt="this... is a random actor"/>
                    </ImageWrapper>
                    <ButtonLine>
                        <MenuButtons
                            type="submit"
                            onClick={this.handleClickGame}
                        >Start Game      
                        </MenuButtons>
                        <MenuButtons
                            type="submit"
                            onClick={this.handleClickHowTo}
                        >How to Play   
                        </MenuButtons>
                        <MenuButtons
                            type="submit"
                            onClick={this.handleClickLeaderboard}
                        >Leaderboard
                        </MenuButtons>
                    </ButtonLine>
                    <ButtonLine>
                        <AuthButtons
                            type='submit'
                            onClick={this.handleClickRegister}
                        >Register
                        </AuthButtons>
                        <AuthButtons
                            type='submit'
                            onClick={this.handleClickLogin}
                        >Login
                        </AuthButtons>
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
            
        )} else if (this.state.clickedGame) {
            return <SelectDifficulty/>
        } else if (this.state.clickedHowTo) {
            return <Instructions/>
        } else if (this.state.clickedLeaderboard) {
            return <Leaderboard/>     
        } else if (this.state.clickedRegister) {
            return <Register/>
        } else if (this.state.clickedLogin) {
            return <Login/>
        }
    }
}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(HomePage);