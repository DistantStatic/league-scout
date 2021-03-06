import { useState, useEffect, useContext } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../../components/layouts/main-layout";
import Loader from '../../../components/loader/loader';
import MatchHistory from '../../../components/match-history/match-history';
import SummonerDetail from '../../../components/layouts/summoner-detail';
import MatchModal from '../../../components/modals/match-modal';
import PlayerModal from '../../../components/modals/player-modal';
import SummonerContextProvider from '../../../components/context-providers/summoner-context';
import ErrorDisplay from '../../../components/errors/error';

export default function Matches(){
    const router = useRouter()
    const { sid, page }: { [key: string]: string | string[] } = router.query

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [matches, setMatches] = useState([])
    const [matchModal, setMatchModal] = useState(false)
    const [playerModal, setPlayerModal] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(0)
    const [selectedPlayer, setSelectedPlayer] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    //would be nice to find a better way, this causes 2 api calls.
    useEffect(() => {
        page && Number(page) > 0 ? setCurrentPage(Number(page)) : ''
    }, [page])

    useEffect(() => {
        if(typeof(sid) === "undefined") return;
        setLoading(true)
        fetch(`/api/matches/${sid}?page=${currentPage}`)
        .then(async (resp) => {
            const data = await resp.json()
            console.log(data)
            setMatches(data)
        })
        .catch(err => {
            console.log(err)
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [sid, currentPage])

    function matchSelection(index: number) {
        setSelectedMatch(index)
        setMatchModal(true)
    }

    function playerSelection(playerIndex: number) {
        setSelectedPlayer(playerIndex)
        setPlayerModal(true)
    }

    function changePage(forward: boolean) {
        if (forward && matches.length > 5){
            window.history.replaceState( {} , '', `?page=${currentPage + 1}` )
            setCurrentPage(currentPage + 1)
        } else if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            window.history.replaceState( {} , '', `?page=${currentPage - 1}` )
        } 
    }

    return (
        <SummonerContextProvider summonerName={sid}>
        <MainLayout home={false} title={` ${sid} - Matches`}>
            <SummonerDetail summoner={sid}>
                { loading ? <Loader /> : 
                        error ? <ErrorDisplay /> :
                            matches.length > 0 ? 
                                <><MatchHistory 
                                    matchSelector={matchSelection}
                                    matches={matches}
                                    />
                                <MatchModal 
                                    show={matchModal}
                                    hide={() => setMatchModal(false)}
                                    match={matches[selectedMatch]}
                                    playerSelector={playerSelection}
                                    />
                                <PlayerModal 
                                    show={playerModal} 
                                    hide={() => setPlayerModal(false)} 
                                    participant={matches[selectedMatch]['info']['participants'][selectedPlayer]} 
                                    /></>
                                : <ErrorDisplay title={`${Number(page) > 0 ? 'No more matches to show' : 'No matches found'}`}/>
                }
                
                <div className="absolute bottom-2 w-full h-7">
                    <button className="bg-green-300 rounded-r-lg h-full w-1/12 float-left"
                        onClick={() => changePage(false)}
                    >
                        <span className="antialiased font-semibold text-xl">{'<'}</span>
                    </button>
                        <span className="rounded-full bg-green-300 text-transparent bg-clip-text text-2xl font-semibold"> {currentPage} </span>
                    <button className="bg-green-300 rounded-l-lg h-full w-1/12 float-right"
                        onClick={() => changePage(true)}
                    >
                        <span className="antialiased font-semibold text-xl">{'>'}</span>
                    </button>
                </div>
                </SummonerDetail>
        </MainLayout>
        </SummonerContextProvider>
    )
}
