import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import MainLayout from "../../../components/layouts/main-layout";
import Loader from '../../../components/loader/loader';
import MatchHistory from '../../../components/match-history/match-history';
import SummonerDetail from '../../../components/layouts/summoner-detail';
import MatchModal from '../../../components/modals/match-modal';
import PlayerModal from '../../../components/modals/player-modal';

export default function Matches(){
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [matches, setMatches] = useState([])
    const [matchModal, setMatchModal] = useState(false)
    const [playerModal, setPlayerModal] = useState(false)
    const [selectedMatch, setSelectedMatch] = useState(0)
    const [selectedPlayer, setSelectedPlayer] = useState(0)
    const [page, setPage] = useState(1)
    const router = useRouter()
    const { sid }: { [key: string]: string | string[] } = router.query

    useEffect(() => {
        if(typeof(sid) === "undefined") return;
        fetchMatchHistory()
    }, [sid, page])

    function fetchMatchHistory() {
        setLoading(true)
        fetch(`/api/matches/${sid}?page=${page}`)
        .then(async (resp) => {
            const data = await resp.json()
            setMatches(data)
        })
        .catch(err => {
            console.log(err)
            setError(true)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    function matchSelection(index: number) {
        setSelectedMatch(index)
        setMatchModal(true)
    }

    function playerSelection(playerIndex: number) {
        setSelectedPlayer(playerIndex)
        setPlayerModal(true)
    }

    function changePage(forward: boolean) {
        forward ? 
            matches.length > 5 ? setPage(page + 1): '' 
        : 
            page > 1 ?setPage(page - 1) : ''
    }

    return (
        <MainLayout home={false} title={` ${sid} - Matches`}>
            <SummonerDetail summoner={sid}>
                { loading ? <Loader /> : 
                    <>
                        {matches.length > 0 ? <MatchHistory 
                            matchSelector={matchSelection}
                            matches={matches}
                            /> : ""}
                    </>
                }
                { loading ? '' : 
                    matches.length > 0 ? 
                    <>
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
                            />
                    </> : ''
                }
                {error ? <h1>Something went wrong :(</h1> : ''}
                <div className="absolute bottom-2 w-full h-7">
                    <button className="bg-green-300 rounded-r-lg h-full w-1/12 float-left"
                        onClick={() => changePage(false)}
                    >
                        <span className="antialiased font-semibold text-xl">{'<'}</span>
                    </button>
                        <span className="rounded-full bg-green-300 text-transparent bg-clip-text text-2xl font-semibold"> {page} </span>
                    <button className="bg-green-300 rounded-l-lg h-full w-1/12 float-right"
                        onClick={() => changePage(true)}
                    >
                        <span className="antialiased font-semibold text-xl">{'>'}</span>
                    </button>
                </div>
            </SummonerDetail>
        </MainLayout>
    )
}
