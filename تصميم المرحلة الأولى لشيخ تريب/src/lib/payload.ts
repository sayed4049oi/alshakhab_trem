const emptyResult = { docs: [], totalDocs: 0, limit: 20, totalPages: 0, page: 1 }
export async function getPayloadClient() {
  return {
    find: async () => emptyResult,
    create: async ({ data }: { data: any }) => data,
  } as any
}