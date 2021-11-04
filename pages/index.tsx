import MainLayout from '../components/layouts/main-layout'
import FrontDirectory from '../containers/front-directory/front-directory'

export default function Home() {
    return (
        <MainLayout home={true} title={"LeagueScout"}>
            <FrontDirectory />
        </MainLayout>
    )
}
