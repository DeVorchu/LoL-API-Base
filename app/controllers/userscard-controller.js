import faceitAxios from '../axios/faceit.js';
import axios from 'axios';

const mocked = {
    "rounds": [
      {
        "best_of": "2",
        "competition_id": null,
        "game_id": "csgo",
        "game_mode": "5v5",
        "match_id": "1-4baf0993-40ba-421a-ad6b-a41bfa905f6b",
        "match_round": "1",
        "played": "1",
        "round_stats": {
          "Region": "EU",
          "Winner": "d05b3354-b22b-4cb4-9ef2-bd06dd668fe6",
          "Map": "de_inferno",
          "Rounds": "25",
          "Score": "9 / 16"
        },
        "teams": [
          {
            "team_id": "7bdcac30-ad7f-442b-8f8e-ea084f2ca6f1",
            "premade": false,
            "team_stats": {
              "Team Headshots": "6.6",
              "Final Score": "9",
              "Overtime score": "0",
              "Team Win": "0",
              "Second Half Score": "3",
              "First Half Score": "6",
              "Team": "team_missV"
            },
            "players": [
              {
                "player_id": "53ad537d-0e3d-4074-8ec7-89f5daf05c96",
                "nickname": "Flintstoan",
                "player_stats": {
                  "Triple Kills": "1",
                  "Headshots": "7",
                  "Quadro Kills": "0",
                  "Assists": "0",
                  "Penta Kills": "0",
                  "MVPs": "3",
                  "Headshots %": "41",
                  "Kills": "17",
                  "K/D Ratio": "0.94",
                  "Deaths": "18",
                  "Result": "0",
                  "K/R Ratio": "0.68"
                }
              },
              {
                "player_id": "73334bec-40f3-409e-b2f3-a2f09f2f1dd8",
                "nickname": "Cry0genic",
                "player_stats": {
                  "Triple Kills": "2",
                  "Assists": "1",
                  "Result": "0",
                  "MVPs": "3",
                  "Kills": "19",
                  "Headshots": "9",
                  "Deaths": "18",
                  "K/D Ratio": "1.06",
                  "Headshots %": "47",
                  "Penta Kills": "0",
                  "K/R Ratio": "0.76",
                  "Quadro Kills": "1"
                }
              },
              {
                "player_id": "7bdcac30-ad7f-442b-8f8e-ea084f2ca6f1",
                "nickname": "missV",
                "player_stats": {
                  "K/D Ratio": "0.57",
                  "Triple Kills": "1",
                  "Penta Kills": "0",
                  "Headshots": "5",
                  "Headshots %": "42",
                  "K/R Ratio": "0.48",
                  "Quadro Kills": "0",
                  "Assists": "3",
                  "Kills": "12",
                  "Deaths": "21",
                  "MVPs": "0",
                  "Result": "0"
                }
              },
              {
                "player_id": "eb4ece5d-2fd1-4802-ada0-ebe6dac13b78",
                "nickname": "ldv",
                "player_stats": {
                  "Headshots %": "29",
                  "Kills": "17",
                  "Penta Kills": "0",
                  "Assists": "4",
                  "Deaths": "23",
                  "Result": "0",
                  "MVPs": "2",
                  "Quadro Kills": "0",
                  "K/D Ratio": "0.74",
                  "K/R Ratio": "0.68",
                  "Headshots": "5",
                  "Triple Kills": "1"
                }
              },
              {
                "player_id": "39e4b6cd-d4ad-4b9e-ad30-09ec882bb1d4",
                "nickname": "CHAMMMMMIKES",
                "player_stats": {
                  "MVPs": "1",
                  "Deaths": "23",
                  "Quadro Kills": "0",
                  "Headshots %": "70",
                  "K/R Ratio": "0.4",
                  "Headshots": "7",
                  "Assists": "7",
                  "Triple Kills": "0",
                  "K/D Ratio": "0.43",
                  "Result": "0",
                  "Kills": "10",
                  "Penta Kills": "0"
                }
              }
            ]
          },
          {
            "team_id": "d05b3354-b22b-4cb4-9ef2-bd06dd668fe6",
            "premade": false,
            "team_stats": {
              "Team": "team_MichaelMMJ",
              "Team Win": "1",
              "Final Score": "16",
              "Overtime score": "0",
              "Second Half Score": "7",
              "Team Headshots": "7.8",
              "First Half Score": "9"
            },
            "players": [
              {
                "player_id": "31e0986e-d834-4ddc-bdf3-60d491f5b9c7",
                "nickname": "DarudEns",
                "player_stats": {
                  "Penta Kills": "0",
                  "MVPs": "4",
                  "K/D Ratio": "1.73",
                  "Headshots": "9",
                  "K/R Ratio": "0.76",
                  "Result": "1",
                  "Kills": "19",
                  "Assists": "1",
                  "Quadro Kills": "0",
                  "Deaths": "11",
                  "Headshots %": "47",
                  "Triple Kills": "2"
                }
              },
              {
                "player_id": "994c72ba-005d-43ff-a557-103ee548241a",
                "nickname": "mr_eMS",
                "player_stats": {
                  "Headshots %": "32",
                  "K/D Ratio": "1.39",
                  "Assists": "2",
                  "Penta Kills": "0",
                  "MVPs": "2",
                  "Headshots": "8",
                  "K/R Ratio": "1",
                  "Deaths": "18",
                  "Kills": "25",
                  "Triple Kills": "2",
                  "Result": "1",
                  "Quadro Kills": "1"
                }
              },
              {
                "player_id": "c94d845e-6e69-4141-9f97-a5810310c8fd",
                "nickname": "_Snoop-",
                "player_stats": {
                  "K/D Ratio": "1.18",
                  "Triple Kills": "1",
                  "Assists": "8",
                  "Penta Kills": "0",
                  "Kills": "20",
                  "Quadro Kills": "0",
                  "Deaths": "17",
                  "Headshots %": "20",
                  "MVPs": "8",
                  "Headshots": "4",
                  "K/R Ratio": "0.8",
                  "Result": "1"
                }
              },
              {
                "player_id": "d05b3354-b22b-4cb4-9ef2-bd06dd668fe6",
                "nickname": "MichaelMMJ",
                "player_stats": {
                  "Headshots": "11",
                  "Triple Kills": "1",
                  "Deaths": "14",
                  "MVPs": "1",
                  "Quadro Kills": "1",
                  "Penta Kills": "0",
                  "Result": "1",
                  "Assists": "4",
                  "Kills": "24",
                  "K/D Ratio": "1.71",
                  "K/R Ratio": "0.96",
                  "Headshots %": "46"
                }
              },
              {
                "player_id": "c8703c5c-3025-479b-a5a8-f25cd23908f0",
                "nickname": "_-FUTURE",
                "player_stats": {
                  "Result": "1",
                  "K/R Ratio": "0.6",
                  "Headshots": "7",
                  "Quadro Kills": "0",
                  "K/D Ratio": "1",
                  "Assists": "4",
                  "MVPs": "1",
                  "Kills": "15",
                  "Deaths": "15",
                  "Triple Kills": "1",
                  "Penta Kills": "0",
                  "Headshots %": "47"
                }
              }
            ]
          }
        ]
      }
    ]
  }
   

class UsersCardController {    
    async GetUserData(req, res){
      const { name } = req.params;
      const infoPack = [] 
      const firstData = []
      try {

        const dataFirst = await faceitAxios.get(`https://open.faceit.com/data/v4/players?nickname=${name}&game=csgo`)
        infoPack.push(dataFirst.data)
        const dataSecond = await faceitAxios.get(`https://open.faceit.com/data/v4/players/${dataFirst.data.player_id}/stats/csgo`)
        infoPack.push(dataSecond.data)
        const dataPass = await faceitAxios.get(`https://open.faceit.com/data/v4/players/${dataFirst.data.player_id}/history?game=csgo&offset=0&limit=1`) 
        const dataThird = await faceitAxios.get(`https://open.faceit.com/data/v4/matches/${dataPass.data.items[0].match_id}`) 
        infoPack.push(dataThird.data)
        const dataFourth = await faceitAxios.get(`https://open.faceit.com/data/v4/matches/${dataPass.data.items[0].match_id}/stats`) 
        infoPack.push(dataFourth.data)

        firstData.push({
          playerInfo: {
            id: infoPack[0].player_id,
            nickname: infoPack[0].nickname,
            avatar: infoPack[0].avatar,
            country: infoPack[0].country,
            steamId: infoPack[0].platforms.steam,
            last_infraction_date: infoPack[0].infractions.last_infraction_date,
            accLvl: infoPack[0].games.csgo.skill_level_label,
            elo: infoPack[0].games.csgo.faceit_elo,
            friends_ids: infoPack[0].friends_ids,
            membership: infoPack[0].memberships[0],
            infraction_pack: {
              afk: infoPack[0].infractions.afk,
              leaver: infoPack[0].infractions.leaver,
              que_not_checkedin: infoPack[0].infractions.qm_not_checkedin,
              kicked: infoPack[0].infractions.qm_not_voted
            }
          },
          playerStats: {
            lastFiveMatches: infoPack[1].lifetime["Recent Results"],
            totalWinRatio: infoPack[1].lifetime["Win Rate %"],
            totalKD: infoPack[1].lifetime["Average K/D Ratio"],
            currentWinStreak: infoPack[1].lifetime["Current Win Streak"],
            totalWinRatio: infoPack[1].lifetime["Win Rate %"],
            totalWins: infoPack[1].lifetime["Wins"],
            totalMatches: infoPack[1].lifetime["Matches"],
            totalHsProc: infoPack[1].lifetime["Average Headshots %"],
            longestWinStreak: infoPack[1].lifetime["Longest Win Streak"],
            totalMapInfo: infoPack[1].segments

          },
          lastMatchInfo: {
            matchId: infoPack[2].match_id,
            mapPicked: infoPack[2].voting.map.pick,
            locationPicked: infoPack[2].voting.location.pick,
            matchType: infoPack[2].competition_type,
            matchTypeName: infoPack[2].competition_name,
            organizer: infoPack[2].organizer_id,
            teamOne: infoPack[2].teams.faction1,
            teamTwo: infoPack[2].teams.faction2,
            startDate: infoPack[2].started_at,
            demoUrl: infoPack[2].demo_url,
            results: infoPack[2].results,
            matchStatus: infoPack[2].status,
            score: infoPack[3].rounds[0].round_stats["Score"]
          },
          
        })

        res.send(infoPack)  
      } catch (error) {
        res.send('404')
      }             
    }
}



export default new UsersCardController();