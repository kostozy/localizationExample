import {Trans, useTranslation} from "react-i18next";

export const TestComponent = () => {

    const {t} = useTranslation('feature')
    return <div>
        Localisation simple via hook <br/>
        {t('text')}

        <br/><br/>

        Some Insertations: <br/>
        <Trans t={t}>
            Welcome to <strong>React</strong>
            {/*not working https://react.i18next.com/latest/using-with-hooks*/}
        </Trans><br/>
        <Trans t={t}>Welcome to</Trans><br/>
        <Trans i18nKey={'feature:insertation'}>Welcome to <strong>React</strong></Trans>
        <br/>

        <Trans t={t}>Hello {{ firstname: 'Kek' }}</Trans>
        <br/>
        {t('greeting', {firstname: 'YO'})}
        <br/>
        <br/>
        <Trans t={t} i18nKey="newMessages" count={1}>
            You got {{ num: 1 }} messages.
        </Trans>
        <br/>
        <Trans t={t} i18nKey="newMessages" count={2}>
            You got {{ num: 2 }} messages.
        </Trans>

        {/*https://www.artlebedev.ru/typograf/*/}
    </div>
}