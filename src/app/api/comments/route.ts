import { NextResponse } from 'next/server';

let comments: { id: string; content: string; createdAt: string }[] = [];

// Handle GET requests
export async function GET() {
    if (comments.length === 0) {
        return NextResponse.json({ error: 'No comments found' }, { status: 404 });
    }
    return NextResponse.json(comments);
}

// Handle POST requests
export async function POST(req: Request) {
    const body = await req.json();

    if (!body.content) {
        return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const newComment = {
        id: crypto.randomUUID(),
        content: body.content,
        createdAt: new Date().toISOString(),
    };

    comments = [newComment, ...comments];

    return NextResponse.json(newComment, { status: 201 });
}

// Handle DELETE requests
export async function DELETE(req: Request) {
    try {
        console.log('Incoming DELETE Request URL:', req.url);

        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        console.log('Extracted ID:', id);

        if (!id) {
            return NextResponse.json({ error: 'Comment ID is required' }, { status: 400 });
        }

        const index = comments.findIndex((comment) => comment.id === id);

        console.log('Comment Index Found:', index);

        if (index === -1) {
            return NextResponse.json({ error: 'Comment not found' }, { status: 404 });
        }

        const deletedComment = comments.splice(index, 1)[0];

        return NextResponse.json(
            { message: 'Comment deleted successfully', deletedComment },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error handling DELETE request:', error);
        return NextResponse.json({ error: 'Failed to delete comment' }, { status: 500 });
    }
}
