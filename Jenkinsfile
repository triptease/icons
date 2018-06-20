def pipeline
node {
	ws {
		git url: 'git@github.com:triptease/groovy.git', credentialsId: '34e4fcf0-3fbc-44a3-8342-0a823bf18483', changelog: false, poll: false
		pipeline = load 'workflows/cdn.groovy'
	}
}

def projectMap = [
	github_name: 'triptease/icons',
	github_branch: 'master',
	dist_path: 'build',
	host_source_path: '/home/triptease/icons',
	gcloud: [
		setMeta: [
			[ 'header': 'Cache-Control:public, s-maxage=3600, max-age=900', 'glob': '**/*' ]
		]
	],
	fastly: [
		purge: [
			surrogate_keys: ['icons']
		]
	]
]

stage name: 'build'
	pipeline.build(projectMap, 'build', 'yarn')

stage name: 'deploy to production'
	pipeline.uploadToCDN(projectMap, 'production', 'static.triptease.io/icons')
