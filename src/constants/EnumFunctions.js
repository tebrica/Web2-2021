export default function UserNumberToRole(roleNum) {
    switch(roleNum) {
        case 0: {
            return 'CLAN EKIPE'
        }
        case 1: {
            return 'DISPECER'
        }
        case 2: {
            return 'RADNIK'
        }
        case 3: {
            return 'POTROSAC'
        }
        case 4: {
            return 'ADMINISTRATOR'
        }
        default : {
            return 'USER';
        }
    }
}