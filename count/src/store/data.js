import {observable,action} from "mobx"
import axios from "axios"
class Data {
    @observable info={};
    @action getData=()=>{
        axios.get("http://api.cnfuyin.net/api/movie/index?movid=2596&app=fytv&device=android&version=3.0.2").then(res=>{
            this.info=res.data
            console.log(res.data)
        })
    }
    @action getDetail=()=>{
        axios.get("http://api.cnfuyin.net/api/url/index?movid=2596&urlid=42062&app=fytv&device=android&version=3.0.2").then(res=>{
            this.info=res.data
            console.log(res.data)
        })
    }
}
export default Data