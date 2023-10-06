import shieldImg from '../assets/img/productFeatures/shields.svg'
import lightningImg from '../assets/img/productFeatures/lightning.svg'
import fireAlarmImg from '../assets/img/productFeatures/fire-alarm.svg'

const productFeatures = [
    {
        frontTitle: 'Качество материалов',
        img: shieldImg,
        backTitle: 'Корпус из нержавеющей стали',
        backText: 'Турникет имеет долговечный ресурс благодаря стали SUS304, использующийся для создания прочного корпуса.',
    },
    {
        frontTitle: 'Скорость работы',
        img: lightningImg,
        backTitle: 'Скорость работы',
        backText: 'Высокая пропускная способность ~48 проходов в минуту.',
    },
    {
        frontTitle: 'Аварийная система',
        img: fireAlarmImg,
        backTitle: 'Удобная система аварийного выхода',
        backText: 'Планки «анти-паника». Во время экстренных ситуаций и отключения электроэнергии рукоятки турникета опускаются, чтобы позволить людям быстро и безопасно покинуть территорию.',
    },
]

export default productFeatures