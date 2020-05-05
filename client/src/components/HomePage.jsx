import React from 'react';
import styled from 'styled-components';
import Instructions from './Instructions';
import Leaderboard from './Leaderboard';
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
        font-size: 2.5rem;
        position: relative;
        right: 0.35rem;
    }

    @media screen and (max-width: 25.688rem) {
        position: relative;
        right: 0.2rem;
    }

    @media screen and (max-width: 23.438rem) {
        position: relative;
        right: 1rem;
    }

    @media screen and (max-width: 22.5rem) {
        position: relative;
        right: 1.5rem;
    }

    @media screen and (max-width: 20rem) {
        font-size: 2.25rem;
    }    
    `;

const ImageWrapper = styled.div`

    position: relative;
    bottom: 2rem;
    right: 0.2rem;

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

`

const StartGameButton = styled.button`
    background-color: pink;
    color: black;
    :hover {color: white};
    transition: color .1s;
    position: relative;
    bottom: 2.5rem;
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

const HowToPlayButton = styled.button`
    background-color: pink;
    :hover {color: white};
    transition: color .1s;
    color: black;
    position: relative;
    bottom: 2.5rem;
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

const LeaderboardButton = styled.button`
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

class HomePage extends React.Component {

    state = {
        clickedGame: false,
        clickedHowTo: false,
        clickedLeaderboard: false
    }

    handleClickGame () {
        this.setState({
          clickedGame: true,
          clickedHowTo: false,
          clickedLeaderboard: false
        })
      }

    handleClickHowTo () {
        this.setState({
            clickedGame: false,
            clickedHowTo: true,
            clickedLeaderboard: false
        })
    }

    handleClickLeaderboard () {
        this.setState({
            clickedGame: false,
            clickedHowTo: false,
            clickedLeaderboard: true
        })
    }

    renderContent1() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <button type='submit' onClick= {() => {window.open("/auth/google")}} style={{
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
                return <button type='submit' onClick= {() => {window.open("/api/logout")}} style={{
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
                >Logout</button>
        }
    }

    render() {
        // dev test
        console.log(this.props);

        if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {

        return(
            <StartGameBackground>
                <StyledStartGame>
                    <StartGameTitle>
                        Bingemasters
                    </StartGameTitle>
                    <ImageWrapper>
                        <img className="theActorImg" src={silhouette} alt="this... is a random actor"/>
                    </ImageWrapper>
                    <ButtonLine>
                        <StartGameButton 
                            type="submit"
                            onClick={this.handleClickGame.bind(this)}
                            >Start Game      
                        </StartGameButton>
                        <HowToPlayButton
                            type="submit"
                            onClick={this.handleClickHowTo.bind(this)}
                            >How to Play   
                        </HowToPlayButton>
                        <LeaderboardButton
                        type="submit"
                        onClick={this.handleClickLeaderboard.bind(this)}
                        >Leaderboard
                        </LeaderboardButton>
                        {this.renderContent1()}   
                    </ButtonLine>
                </StyledStartGame>
            </StartGameBackground>
            

        )} else if (this.state.clickedGame === true && this.state.clickedHowTo === false && this.state.clickedLeaderboard === false) {
            return <SelectDifficulty/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === true && this.state.clickedLeaderboard === false) {
            return <Instructions/>
    }      else if (this.state.clickedGame === false && this.state.clickedHowTo === false && this.state.clickedLeaderboard === true) {
            // Change back to Leaderboard
            return <Leaderboard/>
    }
}}

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(HomePage);