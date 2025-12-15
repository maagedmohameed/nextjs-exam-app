export async function GET(req: Request) {
  return Response.json({
    exams: [
      {
        id: 1,
        name: "Math",
        duration: 60,
        questions: 20,
      },
    ],
  });
}
