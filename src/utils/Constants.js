class Constants {

    static ENV = {
        LOCAL: 'LOCAL',
        DEV: 'DEV',
        QA: 'QA',
        STAGING: 'STAGING',
        PROD: 'PROD'
    };

    static ALERT_SEVERITY = {
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info',
        SUCCESS: 'success',
    }

    static MIME_TYPES = {
        PDF: "application/pdf",
        XLSX: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        XLS: "application/vnd.ms-excel",
        JPG: "image/jpg",
        JPEG: "image/jpeg",
        PNG: "image/png",
        CSV: "text/plain",
        TXT: "text/plain"
    };

    static AUTH_HEADER = 'x-access-token';

    static COMPANY_HEADER = 'CID';

    static USER_COMPANY_HEADER = 'UCMID';

    static COMPANY = 'COMPANY';

    static THEME_MODE = {
        DARK: 'DARK',
        LIGHT: 'LIGHT'
    }

    static colorCode(key) {
        let color = '#CCEBFF';
        switch (key) {
            case "TRACKING":
                color = '#CCEBFF'
                break;
            case "PRESENT":
                color = '#D6F5D6'
                break;
            case "LEAVE":
                color = '#CCEBFF'
                break;
            case "HOLIDAY":
                color = '#D6F5D6'
                break;
            case "OUT_DUTY":
                color = '#D6F5D6'
                break;
            case "HALF_DAY":
                color = '#CCEBFF'
                break;
            case "WEEK_OFF":
                color = '#CCEBFF'
                break;
            case "ABSENT":
                color = '#ffcccc'
                break;
            default:
                color = '#CCEBFF'
                break;
        }
        return color
    }

    static colorCodeForText(key) {
        let color = 'blue';
        switch (key) {
            case "TRACKING":
                color = 'blue'
                break;
            case "PRESENT":
                color = 'green'
                break;
            case "LEAVE":
                color = 'blue'
                break;
            case "HOLIDAY":
                color = 'green'
                break;
            case "OUT_DUTY":
                color = 'green'
                break;
            case "HALF_DAY":
                color = 'blue'
                break;
            case "WEEK_OFF":
                color = 'blue'
                break;
            case "ABSENT":
                color = 'red'
                break;
            case "LWP":
                color = 'red'
                break;
            default:
                color = 'blue'
                break;
        }
        return color
    }

    static getEnv() {
        return process.env.REACT_APP_APP_ENV;
    }

    static getBaseUrl() {
        return process.env.REACT_APP_BASE_URL || '';
    }

    static getCRMBaseUrl() {
        return process.env.REACT_APP_CRM_BASE_URL || '';
    }

    static getAppName() {
        return process.env.REACT_APP_APP_NAME || '';
    }

    static getGtmId() {
        return process.env.REACT_APP_GTM_ID || '';
    }

    static getDevModeOn() {
        return process.env.REACT_APP_DEV_MODE_ON || false;
    }

    static getGoogleClientId() {
        return process.env.REACT_APP_GOOGLE_CLIENT_ID;
    }

    static getGoogleApiKey() {
        return process.env.REACT_APP_GOOGLE_API_KEY;
    }

    static idleTimeOut = 1000 * 60 * 60;

    static MONTH = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    static YEAR = [2018, 2019, 2020, 2021, 2022, 2023];

    // static colorCode = ["#FFCCCC", "#D6F5D6"];

    static templateType = ['EMAIL', 'DOCUMENT'];

    static templateSubtype = [
        'OFFER_LETTER',
        'NEW_OFFER_EMAIL',
        'CONFIRMATION_REQUEST_EMAIL',
        'CONFIRMATION_APPROVAL_EMAIL',
        'OFFER_REVOKE_EMAIL',
        'TRANSFER_REQUEST_EMAIL',
        'TRANSFER_APPROVAL_EMAIL',
        'RESIGNATION_EMAIL',
        'RESIGNATION_APPROVAL_EMAIL',
        'LEAVE_REQUEST_EMAIL',
        'LEAVE_APPROVAL_EMAIL',
        'ATTENDANCE_CHANGE_REQUEST_EMAIL',
        'ATTENDANCE_CHANGE_APPROVAL_EMAIL',
        'USER_ONBOARDING_EMAIL',
        'APPOINTMENT_LETTER',
        'APPOINTMENT_LETTER_EMAIL',
        'CANDIDATE_APPLICATION_SHORTLISTED',
        'CANDIDATE_APPLICATION_HOLD',
        'CANDIDATE_APPLICATION_REJECTED',
        'CANDIDATE_INTERVIEW_SCHEDULE',
        'CANDIDATE_INTERVIEW_RESCHEDULE',
        'CANDIDATE_ROUNDWISE_SELECTED',
        'CANDIDATE_ROUNDWISE_REJECTED',
        'CANDIDATE_DENIED',
        'CANDIDATE_KEEP_IN_FUNNEL',
        'CANDIDATE_OFFER_ROLLOUT',
        'INTERNSHIP_CERTIFICATE_LETTER',
        'EXPERIENCE_LETTER',
    ];

    static radioYesNo = [{label: 'Yes', value: 'Y'}, {label: 'No', value: 'N'}];

    static taskCategories = [
        "LEAVE",
        "ATTENDANCE_REGULARIZE",
        "SERVING_NOTICE_PERIOD",
        "SERVING_NOTICE_PERIOD_WITHDRAW",
        "ABSCONDING",
        "TRANSFER_REQUEST",
        "JOB_OFFER",
        "EXPENSE_CLAIM",
        "CONFIRMATION",
        "JOB_OPENING",
        "TERMINATION_ABSCOND",
        "DOCUMENT_REQUEST",
        "DOCUMENT_VERIFY",
        "CLEARANCE"
    ];
}

export default Constants;
