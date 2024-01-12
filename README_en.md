# FireShort

[简体中文](./README.md) | English

FireShort is a Serverless, pure front-end URL short app based on Firebase.

This project does not rely on the back end, only uses JavaScript to jump to the target URL in the front end, and the URL structure can be the same as the ordinary short URL program.

*The inspiration and principle of the project can refer to [I wrote a short URL program without a back end...](https://ibcl.us/ShortLink-Firebase_20230626/) (Chinese).*

## Quick Start

### 1. Create a Firebase project

Go to [Firebase console](https://console.firebase.google.com/), then click "Add project" to create a project.

Enter the project name and click "Continue", disable Google Analytics, and click "Create project".

After the project is created, expand the sidebar on the Project Overview page, select "Realtime Database" in Build, and then create a database.

### 2. Modify the database security rules

On the Realtime Database page, click the "Rules" tab, copy the contents of `rules.json` in this repository, paste it into the Rules editor, and then click "Publish".

[rules.json](https://github.com/bclswl0827/FireShort/blob/master/rules.json)

### 3. Build and deploy the project

Clone this repository, and then modify the `firebase.json` file in the root directory of the project.

```bash
$ git clone https://github.com/bclswl0827/FireShort --depth=1 && cd FireShort
```

Install the dependencies.

```bash
$ npm install
```

Build the project.

```bash
$ npm run build
```

The output `build` directory is the project build result, which can be deployed to any static website hosting service.

## Sponsor

[DartNode](https://dartnode.com) revolutionizes hosting with our Wholesale Cloud approach, combining affordability with high-performance in a state-of-the-art data center. As a dedicated ARIN Member and network operator, we ensure 24/7 reliability and superior service, empowering your digital journey with cost-effective solutions.

<a href="https://dartnode.com" _target="_blank">
    <img src="https://app.dartnode.com/assets/dash/images/brand/logo.png" style="background: #2d2d38; border-radius: 5px;" />
</a>
