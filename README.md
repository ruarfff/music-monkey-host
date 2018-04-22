Music Monkey Host Web Application
=================================

This is built with [React](https://reactjs.org/).

Setup: `yarn`

Run: `yarn start`

Test: `yarn test`

This app gets deployed to aws. Currently there is no automated pipeline for deployments. You can use this button to set up a new deployment though:

<p align="center">
<a target="_blank" href="https://console.aws.amazon.com/mobilehub/home?#/?config=https://github.com/ruairitobrien/music-monkey-host/blob/master/music-monkey-host.zip&app=web">
<span>
    <img height="100%" src="https://s3.amazonaws.com/deploytomh/button-deploy-aws-mh.png"/>
</span>
</a>
</p>

You need to configure the project with the [awsmobile-cli](https://github.com/aws/awsmobile-cli).

Run `awsmobile configure`.

Deploying from local machine (WARNING this will deploy to production): `yarn deploy`