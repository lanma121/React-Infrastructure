#sourceDir#
sourceDir=C:/project/kiosk-portal-ui
#publicDir#
publicDir=C:/inetpub/wwwroot/Portal/app
#Capture command exceptions#
function error_exit() {
    echo "$1" 1>&2
    exit 1
}
cd $sourceDir
echo 'Install node_modules, please wait...'
yarn install --production
echo 'Run eslint, please wait...'
yarn run lint || error_exit "Run eslint failure, please try again."
echo 'Run unit test, please wait...'
yarn run test || error_exit "Run unit test failure, please try again."
echo 'Build app, please wait...'
yarn run build
echo 'Release app, please wait...'
yarn run copy $publicDir
