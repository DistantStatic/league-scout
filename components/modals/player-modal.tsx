import Link from 'next/link'
import Image from 'next/image'
import Modal from '../../components/layouts/modal/modal-layout'
import { ParticipantDto } from '../../interface-lib/match-lib/match-lib'
import SummonerItems from '../items/summoner-items/summoner-items'
import SummonerSpell from '../spells/summoner-spells/summoner-spells'

export default function PlayerModal({show, hide, participant}:{show: boolean, hide: ()=>void, participant: ParticipantDto}){

    return(
        <Modal show={show} hide={hide}>
            <Modal.Header>
                <div className="flex flex-row items-center">
                    <div className="flex flex-col">
                        <Image 
                            src={`http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/${participant.profileIcon}.png`} 
                            width={"75px"} 
                            height={"75px"}
                            />
                    </div>
                    <div className="flex flex-col pl-4">
                        <span className="text-3xl">
                            {participant.summonerName} 
                        </span>
                        <span className="text-lg text-gray-400">Lvl: {participant.summonerLevel}</span>
                    </div>
                </div>
                <button onClick={hide} className="bg-red-600 text-white w-10 absolute top-0 right-0 align-middle rounded-tr-md">X</button>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className="mx-auto w-max">
                        <div className="mx-auto w-max pb-2">
                            <span className="text-2xl">{`${participant.championName} ${participant.individualPosition}`}</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="flex flex-row justify-center">
                                <Image src={`/static/champions/${participant.championName}.png`} height={"100"} width={"100"} />
                            </div>
                            <div className="flex flex-row items-center justify-center pb-2">
                                {
                                    [...Array(2)].map((_, index) => (
                                        <SummonerSpell
                                            key={index}
                                            spellSize={"50"}
                                            spellKey={participant[`summoner${index + 1}Id`]} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row flex-wrap justify-center mx-auto w-full">
                            <div className="flex flex-col px-6">
                                <div>
                                    <div className="float-left">
                                        <span className="pr-2">KDA:</span>
                                    </div>
                                        <div className="float-right">
                                        <span className="text-green-500">{participant.kills}</span>/
                                        <span className="text-red-500">{participant.deaths}</span>/
                                        <span className="text-indigo-500">{participant.assists}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                        <span className="pr-2">Gold:</span>
                                    </div>
                                    <div className="float-right">
                                        <span className="text-yellow-300">{participant.goldSpent}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                        <span className="pr-2">Turret Kills:</span>
                                    </div>
                                    <div className="float-right">
                                        <span className="">{participant.turretKills}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                        <span className="pr-2">Wards:</span>
                                    </div>
                                    <div className="float-right">
                                        <span className="">{participant.wardsPlaced}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                        <span className="pr-2">Wards Destroyed:</span>
                                    </div>
                                    <div className="float-right">
                                        <span className="">{participant.wardsKilled}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col px-6">
                                <div>
                                    <div className="float-left">
                                    <span className="pr-2">Phys Dmg:</span>
                                    </div>
                                    <div className="float-right">
                                    <span className="text-yellow-400">{participant.physicalDamageDealt}</span>
                                    {' | '}
                                    <span className="text-red-900">{participant.physicalDamageTaken}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                    <span className="pr-2">True Dmg:</span>
                                    </div>
                                    <div className="float-right">
                                    <span className="text-indigo-200">{participant.trueDamageDealt}</span>
                                    {` | `}
                                    <span className="text-red-300">{participant.trueDamageTaken}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                    <span className="pr-2">Magic Dmg:</span>
                                    </div>
                                    <div className="float-right">
                                    <span className="text-blue-500">{participant.magicDamageDealt}</span>
                                    {' | '} 
                                    <span className="text-red-900">{participant.magicDamageTaken}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                    <span className="pr-2">Total Heals:</span>
                                    </div>
                                    <div className="float-right">
                                    <span className="text-green-500">{participant.totalHeal}</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="float-left">
                                    <span className="pr-2">Team Heals:</span>
                                    </div>
                                    <div className="float-right">
                                    <span className="text-green-500">{participant.totalHealsOnTeammates}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-max mx-auto pt-4">
                        <SummonerItems participant={participant} flat itemImageSize={"75"} />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="mx-auto w-max">
                    <Link href={`/summoner/${participant.summonerName}`}>
                    <button className=" bg-blue-600 w-max rounded-lg">
                        <span className="text-lg px-4">{'More Info...'}</span>
                    </button>
                    </Link>
                </div>
            </Modal.Footer>
        </Modal>
    )
}