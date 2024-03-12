import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';

const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `posts/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true
		},
		description: {
			type: 'string',
			description: 'The description of the post',
			required: true
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true
		}
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (doc) => `${doc._raw.flattenedPath}`.replace('posts/', '')
		}
	}
}));

const Project = defineDocumentType(() => ({
	name: 'Project',
	filePathPattern: `projects/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the project',
			required: true
		},
		description: {
			type: 'string',
			description: 'The description of the project',
			required: true
		},
		date: {
			type: 'date',
			description: 'The date of the project',
			required: true
		},
		stack: {
			type: 'list',
			description: 'The stack of the project',
			required: true,
			of: { type: 'string' }
		},
		image: {
			type: 'string',
			description: 'The image of the project',
			required: true
		},
		github: {
			type: 'string',
			description: 'The github link of the project'
		},
		link: {
			type: 'string',
			description: 'The link of the project'
		},
		twitter: {
			type: 'string',
			description: 'The twitter link of the project'
		}
	}
}));

const rehypPrettyCodeOptions = {
	theme: 'one-dark-pro',
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }];
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push('line--highlighted');
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ['word--highlighted'];
	}
};

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post, Project],
	mdx: {
		rehypePlugins: [[rehypePrettyCode, rehypPrettyCodeOptions]]
	}
});
