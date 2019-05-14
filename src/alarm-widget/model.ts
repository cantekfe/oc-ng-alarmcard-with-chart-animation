
 export interface AlarmView{
  id: number
  alarmTypeId:number
  name: string
  time : string
  roomName : string
  color: string
}

export interface SpeedSetting {
  id:number
  name:string
  value:number
}

export interface AlarmType {
  id:number
  name:string
  type:string
}

export interface Room {
  id:number
  name:string
}

export type UserAlarmSettings = {
  id: string
  userId : string
  speed: SpeedSetting
  userAlarms: AlarmType[]
}

export interface AlarmCardSettings {
  speedSettings : SpeedSetting[]
  alarmList : AlarmType[]
  roomList : Room[]
}

